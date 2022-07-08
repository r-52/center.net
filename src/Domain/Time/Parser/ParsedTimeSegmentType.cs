namespace HumanCenterNet.Domain.Time.Parser;


public enum ParsedTimeSegmentType
{
    Undefined = -1,

    Day = 1,

    Hour = 2,

    Minute = 3,
}

public class ParsedTimeSegmentTypeMatcher
{
    public static ParsedTimeSegmentType Match(string s)
    {
        switch (s.ToLowerInvariant())
        {
            case "h":
            case "hour":
            case "hours":
                return ParsedTimeSegmentType.Hour;
            case "day":
            case "days":
            case "d": return ParsedTimeSegmentType.Day;
            case "min":
            case "m":
                return ParsedTimeSegmentType.Minute;
            default:
                return ParsedTimeSegmentType.Undefined;
        }
    }
}
