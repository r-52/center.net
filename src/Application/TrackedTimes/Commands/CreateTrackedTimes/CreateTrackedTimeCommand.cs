namespace HumanCenterNet.Application.TodoLists.Commands.CreateTrackedTime;

using System.Threading;
using System.Threading.Tasks;
using MediatR;

public record CreateTrackedTimeCommand : IRequest<string>
{
    public DateTime? StartedAt { get; set; }

    public DateTime? EndedAt { get; set; }

    public string? Description { get; set; }

    public string? HumanTimeDuration { get; set; }

    public int TrackedHours { get; set; } = 0;

    public int TrackedMinutes { get; set; } = 0;

    public int TimeTypeId { get; set; }

    public int? TaskId { get; set; }

    public int UserId { get; set; } = default!;
}


public class CreateTrackedTimeHandler : IRequestHandler<CreateTrackedTimeCommand, string>
{
    private readonly IApplicationDbContext _context;

    public CreateTrackedTimeHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public Task<string> Handle(CreateTrackedTimeCommand request, CancellationToken cancellationToken)
    {
        return Task.FromResult("");
    }
}
