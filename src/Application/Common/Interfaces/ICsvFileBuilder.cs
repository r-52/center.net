using HumanCenterNet.Application.TodoLists.Queries.ExportTodos;

namespace HumanCenterNet.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
}
