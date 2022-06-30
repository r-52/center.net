using HumanCenterNet.Application.Common.Models;
using HumanCenterNet.Application.TodoItems.Commands.CreateTodoItem;
using HumanCenterNet.Application.TodoItems.Commands.DeleteTodoItem;
using HumanCenterNet.Application.TodoItems.Commands.UpdateTodoItem;
using HumanCenterNet.Application.TodoItems.Commands.UpdateTodoItemDetail;
using HumanCenterNet.Application.TodoItems.Queries.GetTodoItemsWithPagination;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HumanCenterNet.WebUI.Controllers;

[Authorize]
public class TodoItemsController : ApiControllerBase
{
    public TodoItemsController(ILogger logger) : base(logger)
    {
    }

    [HttpGet]
    public async Task<ActionResult<PaginatedList<TodoItemBriefDto>>> GetTodoItemsWithPagination([FromQuery] GetTodoItemsWithPaginationQuery query)
    {
        return await Mediator.Send(query);
    }

    [HttpPost]
    public async Task<ActionResult<int>> Create(CreateTodoItemCommand command)
    {
        return await Mediator.Send(command);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Update(int id, UpdateTodoItemCommand command)
    {
        if (id != command.Id)
        {
            return BadRequest();
        }

        await Mediator.Send(command);

        return NoContent();
    }

    [HttpPut("[action]")]
    public async Task<ActionResult> UpdateItemDetails(int id, UpdateTodoItemDetailCommand command)
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
        await Mediator.Send(new DeleteTodoItemCommand(id));

        return NoContent();
    }
}
