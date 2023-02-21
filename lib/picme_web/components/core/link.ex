defmodule PicmeWeb.CoreComponents.Link do
  @moduledoc """
  Link components.
  """

  use Phoenix.Component

  attr :navigate, :any, required: true
  slot :inner_block, required: true

  @doc """
  Renders a back navigation link.

  ## Examples

      <.back navigate={~p"/posts"}>Back to posts</.back>
  """

  def back(assigns) do
    ~H"""
    <div class="mt-16">
      <.link navigate={@navigate} class="text-sm font-semibold leading-6 text-zinc-900 hover:text-zinc-700">
        <Lucideicons.arrow_left class="w-3 h-3 stroke-current inline" />
        <%= render_slot(@inner_block) %>
      </.link>
    </div>
    """
  end
end
