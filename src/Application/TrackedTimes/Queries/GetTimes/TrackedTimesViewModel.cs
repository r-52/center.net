using HumanCenterNet.Application.Common.Mappings;
using HumanCenterNet.Domain.Entities;

namespace HumanCenterNet.Application.TrackedTimes.Queries.GetTimes;


public class TrackedTimesViewModel: IMapFrom<TrackedTimeModel>
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
