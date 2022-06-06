using HumanCenterNet.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HumanCenterNet.Application.Common.Interfaces.Db;

public interface IApplicationDbContext: IBaseDbContext
{
    DbSet<TodoList> TodoLists { get; }

    DbSet<TodoItem> TodoItems { get; }
}
