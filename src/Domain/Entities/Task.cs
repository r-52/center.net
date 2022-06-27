namespace HumanCenterNet.Domain.Entities;


public class TaskModel : BaseAuditableEntity
{
    public DateTime? BookableStartAt { get; set; } = DateTime.Now;

    public DateTime? BookableEndAt { get; set; } = DateTime.Now;

    public string Title { get; set; } = default!;

    public string? Description { get; set; }

    public int MaxBookingCount { get; set; } = -1;

    public ProjectModel Project { get; set; }

    public int ProjectId { get; set; }
}
