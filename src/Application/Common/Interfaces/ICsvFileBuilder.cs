using center.net.Application.TodoLists.Queries.ExportTodos;

namespace center.net.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
}
