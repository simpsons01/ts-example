
type todo = {
  content: string
  id: number
  isDone: boolean
}

type user = {
  account: string
  password: string
  signIn: boolean
  todos: todo[]
}

type userType = user

interface TodosSystem {
  getTodos(): todo[]
  postTodos(payload: todo): void
  putTodos(id: todo["id"], payload: todo): void
  deleteTodos(id: todo["id"]): void
}

interface SigninSystem {
  register(payload: user): void
  signIn(account: user["account"], password: user["password"]): void
  signOut(account: user["account"], password: user["password"]): void
}

class System implements SigninSystem, TodosSystem {
  private users: user[] = []
  private currentUser: user | null

  public register(payload: user): void {
    if (!this.users.some(x => x.password === payload.password && x.account === payload.account)) {
      this.users.push(payload)
    }
  }

  public signIn(account: user["account"], password: user["password"]): void {
    this.users = this.users.map(user => {
      if (user.password === password && user.account === account) {
        return {
          ...user,
          signIn: true
        }
        this.currentUser = user
      } else {
        return user
      }
    })
  }

  public signOut(account: user["account"], password: user["password"]): void {
    this.users = this.users.map(user => {
      if (user.password === password && user.account === account) {
        return {
          ...user,
          signIn: false
        }
      } else {
        return user
      }
    })
    this.currentUser = null
  }

  public getTodos(): todo[] {
    return this.currentUser.todos
  }

  public postTodos(payload: todo): void {
    this.currentUser.todos.push(payload)
  }

  public putTodos(id: todo["id"], payload: todo): void {
    this.currentUser.todos = this.currentUser.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          ...payload
        }
      } else {
        todo
      }
    })
  }

  public deleteTodos(id: todo["id"]): void {
    this.currentUser.todos = this.currentUser.todos.filter(todo => todo.id !== id) 
  }
}


interface userList<T extends userType> {
  name: T
  getName(str: T): T
}

// 介面指定義一個類別該有的方法，類別實作出邏輯，外部呼叫時不能也不需要知道類別實作的邏輯，只需關注介面提供的方法
