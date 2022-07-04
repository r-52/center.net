namespace HumanCenterNet.Domain.Entities;


public class TrackedTimeModel : BaseAuditableEntity
{
    public DateTime? StartedAt { get; set; }

    public DateTime? EndedAt { get; set; }

    public string? Description { get; set; }

    public string? HumanTimeDuration { get; set; }

    public int TrackedHours { get; set; } = 0;

    public int TrackedMinutes { get; set; } = 0;

    public TimeTypeModel TimeType { get; set; }

    public int TimeTypeId { get; set; }

    public TaskModel? Task { get; set; }

    public int? TaskId { get; set; }

    public int UserId { get; set; } = default!;

    public string Slug { get; set; }
}
