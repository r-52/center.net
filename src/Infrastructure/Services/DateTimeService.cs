using center.net.Application.Common.Interfaces;

namespace center.net.Infrastructure.Services;

public class DateTimeService : IDateTime
{
    public DateTime Now => DateTime.Now;
}
