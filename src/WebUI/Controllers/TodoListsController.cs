using HumanCenterNet.Application.TodoLists.Commands.CreateTodoList;
using HumanCenterNet.Application.TodoLists.Commands.DeleteTodoList;
using HumanCenterNet.Application.TodoLists.Commands.UpdateTodoList;
using HumanCenterNet.Application.TodoLists.Queries.ExportTodos;
using HumanCenterNet.Application.TodoLists.Queries.GetTodos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HumanCenterNet.WebUI.Controllers;

[Authorize]
public class TodoListsController : ApiControllerBase
{
    public TodoListsController(ILogger logger) : base(logger)
    {
    }

    [HttpGet]
    public async Task<ActionResult<TodosVm>> Get()
    {
        return await Mediator.Send(new GetTodosQuery());
    }

    [HttpGet("{id}")]
    public async Task<FileResult> Get(int id)
    {
        var vm = await Mediator.Send(new ExportTodosQuery { ListId = id });

        return File(vm.Content, vm.ContentType, vm.FileName);
    }

    [HttpPost]
    public async Task<ActionResult<int>> Create(CreateTodoListCommand command)
    {
        return await Mediator.Send(command);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Update(int id, UpdateTodoListCommand command)
    {
        if (id != command.Id)
        {
            return BadRequest();
        }

        await Mediator.Send(command);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        await Mediator.Send(new DeleteTodoListCommand(id));

        return NoContent();
    }
}
