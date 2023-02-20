defmodule PicmeWeb.CoreComponents.Button do
  @moduledoc """
  Button components.
  """

  use Phoenix.Component

  @doc """
  Renders a button.

  ## Examples

      <.button>Send!</.button>
      <.button phx-click="go" class="ml-2">Send!</.button>
  """

  attr :type, :string, default: nil
  attr :class, :string, default: nil
  attr :size, :string, values: ["xs", "sm", "md", "lg"], default: "md", doc: "button size"

  attr :intent, :string,
    values: ["neutral", "primary", "secondary", "accent", "info", "success", "warning", "error"],
    default: "neutral",
    doc: "button color"

  attr :variant, :string, values: ["solid", "outline", "ghost", "link"], default: "solid", doc: "button variant style"
  attr :loading, :boolean, default: false, doc: "indicates a loading state"
  attr :disabled, :boolean, default: false, doc: "indicates a disabled state"
  attr :active, :boolean, default: false, doc: "forces the active state"
  attr :rest, :global, include: ~w(form name value method download rel target)

  slot :inner_block, required: true

  def button(assigns) do
    assigns = assign(assigns, :attr_classes, button_classes(assigns))

    ~H"""
    <button type={@type} class={["btn", "phx-submit-loading:opacity-75", @attr_classes, @class]} {@rest}>
      <%= render_slot(@inner_block) %>
    </button>
    """
  end

  defp button_classes(assigns) do
    [intent_classes(assigns)]
  end

  defp intent_classes(assigns) do
    case assigns[:intent] do
      "neutral" -> ""
      "primary" -> "btn-primary"
      "secondary" -> "btn-secondary"
      "accent" -> "btn-accent"
      "info" -> "btn-info"
      "success" -> "btn-success"
      "warning" -> "btn-warning"
      "error" -> "btn-error"
    end
  end
end
