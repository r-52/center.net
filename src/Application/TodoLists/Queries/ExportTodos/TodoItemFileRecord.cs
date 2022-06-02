using HumanCenterNet.Application.Common.Mappings;
using HumanCenterNet.Domain.Entities;

namespace HumanCenterNet.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; set; }

    public bool Done { get; set; }
}
