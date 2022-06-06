namespace HumanCenterNet.Infrastructure.Services.Db;

public class SqliteDatabaseFilePathService : ISqliteDatabaseFilePathService
{
    public string GetFilePathForSqliteDatabase()
    {
        var databaseSuffix = string.Empty;
#if DEBUG
        databaseSuffix = "dev";
#else
        databaseSuffix = "prod";
#endif

        var path = System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, $"center_{databaseSuffix}.db");
        return path;
    }
}
