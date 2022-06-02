using System.Globalization;
using HumanCenterNet.Application.Common.Interfaces;
using HumanCenterNet.Application.TodoLists.Queries.ExportTodos;
using HumanCenterNet.Infrastructure.Files.Maps;
using CsvHelper;

namespace HumanCenterNet.Infrastructure.Files;

public class CsvFileBuilder : ICsvFileBuilder
{
    public byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records)
    {
        using var memoryStream = new MemoryStream();
        using (var streamWriter = new StreamWriter(memoryStream))
        {
            using var csvWriter = new CsvWriter(streamWriter, CultureInfo.InvariantCulture);

            csvWriter.Configuration.RegisterClassMap<TodoItemRecordMap>();
            csvWriter.WriteRecords(records);
        }

        return memoryStream.ToArray();
    }
}
