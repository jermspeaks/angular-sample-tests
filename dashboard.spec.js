describe('DashboardCtrl', function() {

  beforeEach(module('dashboard'));

  function runController($scope, projects, tasks) {
    inject(function($controller) {
      $controller('DashboardCtrl', {
        $scope: $scope,
        projects: projects,
        tasks: tasks
      });
    });
  }

  function createMockProject(id) {
    return {
      $id: function() {
        return id;
      }
    };
  }

  function createMockProjectList() {
    return [createMockProject('project-id')];
  }

  function createMockTask(id) {
    return {
      $id: function() {
        return id;
      }
    };
  }

  function createMockTaskList() {
    return [createMockTask('task-id')];
  }

  it('attaches the list of projects and tasks to scope', function() {
    var $scope = {},
      projects = createMockProjectList(),
      tasks = createMockTaskList();

    runController($scope, projects, tasks);

    expect($scope.projects).toBe(projects);
    expect($scope.tasks).toBe(tasks);
  });

  describe('manageBacklog(project-id)', function() {
    var $scope = {},
      projects = createMockProjectList(),
      tasks = createMockTaskList();

    it('changes the location', inject(function($location) {
      spyOn($location, 'path');
      runController($scope, projects, tasks);

      $scope.manageBacklog($scope.projects[0].$id());

      expect($location.path).toHaveBeenCalledWith('/projects/project-id/productbacklog');
    }));
  });

  describe('manageSprints(project-id)', function() {
    var $scope = {},
      projects = createMockProjectList(),
      tasks = createMockTaskList();

    it('changes the location', inject(function($location) {
      spyOn($location, 'path');
      runController($scope, projects, tasks);

      $scope.manageSprints($scope.projects[0].$id());

      expect($location.path).toHaveBeenCalledWith('/projects/project-id/sprints');
    }));
  });
});