defmodule PicmeWeb.CoreComponents.Label do
  @moduledoc """
  Renders a label.
  """

  use Phoenix.Component

  attr :for, :string, default: nil
  slot :inner_block, required: true

  def label(assigns) do
    ~H"""
    <label for={@for} class="block text-sm font-semibold leading-6 text-zinc-800">
      <%= render_slot(@inner_block) %>
    </label>
    """
  end
end
