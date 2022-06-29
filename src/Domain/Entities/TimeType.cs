namespace HumanCenterNet.Domain.Entities;

public class TimeTypeModel : BaseAuditableEntity
{

    public string Name { get; set; } = default!;

    public bool IsCustom { get; set; } = true;

    public string ColorCode { get; set; } = default!;

    public int MaxDaysPerYear { get; set; } = -1;

    public bool IsPaidAbsence { get; set; } = false;

    public string CustomDescription { get; set; } = "";

    public string CustomHover { get; set; } = "";
}
