using HumanCenterNet.Application.Common.Interfaces;

namespace HumanCenterNet.Infrastructure.Services;

public class DateTimeService : IDateTime
{
    public DateTime Now => DateTime.Now;
}
