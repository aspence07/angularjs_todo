var application = angular.module('application', []);

application.component('container', {
  controller: class {
    constructor () {
      this.todos = [];
      this.nextId = 0;
    }
  },
  
  template: `
    <add-todo todos="$ctrl.todos" next-id="$ctrl.nextId"></add-todo>
    <todo-list todos="$ctrl.todos"></todo-list>
  `,
});


application.component('addTodo', {
  bindings: {
    todos: '=',
    nextId: '='
  },
  
  controller: class {
    constructor () {
      this.label = "Todo";
    }
    
    addTodo () {
      
      let thisTodo = {
        id: this.nextId++,
        value: this.todo
      }
      
      this.todos.push(thisTodo);
      this.todo = '';
    }
  },
  
  template: `
    {{$ctrl.label}}: <input type="text" ng-model="$ctrl.todo" />
    <button ng-click="$ctrl.addTodo()">Add</button>
  `
});


application.component('todoList', {
  bindings: {
    todos: '='
  },
  
  controller: class {
    
    remove (id) {
      
      let todos = this.todos;
      
      // var indicesToRemove = [];
      /*
      for (var i = 0; i < todos.length; i++) {
        if (todos[i] == value) {
          indicesToRemove.push(i);
        }
      }
      */
      //for (var i = 0; i < indicesToRemove.length; i++) {
      
      let index = 0;
      
      for (var i = 0; i < todos.length; i++) {
        let thisTodo = todos[i];
        if (thisTodo.id == id) {
          index = i;
          break;
        }
      }
       
        todos.splice(index, 1);
      //}
    }// END remove()
    
  },
  
  template: `
    <div style="margin-top: 20px;">
      <ul>
        <li ng-repeat="todo in $ctrl.todos">
          {{todo.value}} <button ng-click="$ctrl.remove(todo.id)">-</button>
        </li>
      </ul>
    </div>
  `
});
