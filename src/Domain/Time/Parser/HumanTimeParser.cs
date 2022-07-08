using System.Collections.Generic;
using HumanCenterNet.Domain.Extensions;

namespace HumanCenterNet.Domain.Time.Parser;


public class HumanTimeParser : IHumanTimeParser
{
    public Task Parse(string input, HumanTimeParserOptions options)
    {
        if (string.IsNullOrEmpty(input) || string.IsNullOrWhiteSpace(input))
        {
            throw new ArgumentException("missing input");
        }

        var parseText = input.Trim();

        Regex decimalRegx = new Regex(@"(\.|\,)");
        if (decimalRegx.IsMatch(parseText))
        {
            throw new Exception("got wrong input. no decimal values are allowed");
        }


        string pattern = @"(d|h|min|m)";
        Regex regex = new Regex(pattern);
        var splitted = regex.Split(parseText);
        ParsedTimeSegment segment = new();
        List<ParsedTimeSegment> res = new();
        foreach (var elem in splitted.ToList())
        {
            if (regex.IsMatch(elem))
            {
                var unit = ParsedTimeSegmentTypeMatcher.Match(elem);
                segment.Type = unit;
                res.Add(segment.Clone<ParsedTimeSegment>());
            }
            else
            {
                segment.Value = Convert.ToInt32(elem);
            }
        }

        return Task.FromResult("");
    }
}
