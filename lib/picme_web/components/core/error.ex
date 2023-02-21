defmodule PicmeWeb.CoreComponents.Error do
  @moduledoc """
  Error message components.
  """

  use Phoenix.Component

  @doc """
  Generates a generic error message.
  """

  slot(:inner_block, required: true)

  def error(assigns) do
    ~H"""
    <p class="phx-no-feedback:hidden mt-3 flex gap-3 text-sm leading-6 text-rose-600">
      <Lucideicons.alert_circle class="mt-0.5 h-5 w-5 flex-none fill-rose-500" />
      <%= render_slot(@inner_block) %>
    </p>
    """
  end
end
