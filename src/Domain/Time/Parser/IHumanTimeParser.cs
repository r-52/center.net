namespace HumanCenterNet.Domain.Time.Parser;



public interface IHumanTimeParser
{
    public Task<List<ParsedTimeSegment>> Parse(string input, HumanTimeParserOptions options);
}
