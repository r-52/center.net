using center.net.Application.Common.Mappings;
using center.net.Domain.Entities;

namespace center.net.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; set; }

    public bool Done { get; set; }
}
