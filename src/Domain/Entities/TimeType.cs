namespace HumanCenterNet.Domain.Entities;

public class TimeTypeModel : BaseAuditableEntity
{

    public string Name { get; set; } = default!;

    public bool IsCustom { get; set; } = true;
}
