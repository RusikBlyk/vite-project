// Тип для завдань (todos)
interface Todo {
  id: number;
  title: string;
}

// Функція для отримання списку завдань
export const getTodos = async (): Promise<Todo[]> => {
  // Імітація запиту до сервера
  return [
    { id: 1, title: "Do Laundry" },
    { id: 2, title: "Buy Groceries" },
  ];
};

// Функція для додавання нового завдання
export const postTodo = async (todo: Todo): Promise<void> => {
  // Імітація запиту до сервера для додавання завдання
  console.log("New todo added:", todo);
};
