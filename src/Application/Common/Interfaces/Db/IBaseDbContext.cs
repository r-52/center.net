using HumanCenterNet.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HumanCenterNet.Application.Common.Interfaces.Db;

public interface IBaseDbContext
{
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
