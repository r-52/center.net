namespace HumanCenterNet.Domain.Entities;

public class ProjectModel : BaseAuditableEntity
{
    public string Title { get; set; } = default!;

    public string Description { get; set; } = default!;

    public DateTime? ProjectStartAt { get; set; }

    public DateTime? ProjectEndAt { get; set; }

    public DateTime? BookableTasksAt { get; set; }

    public DateTime? BookableTasksEndAt { get; set; }

    public string CustomerName { get; set; } = default!;

    public string CustomerId { get; set; } = default!;

    public List<TaskModel> Tasks { get; set; }
}
