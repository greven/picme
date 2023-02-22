defmodule PicmeWeb.CoreComponents.Button do
  @moduledoc """
  Button components.
  """

  use Phoenix.Component
  use CVA.Component

  @doc """
  Renders a button.

  ## Examples

      <.button>Send!</.button>
      <.button phx-click="go" class="ml-2">Send!</.button>
  """

  variant(
    :size,
    [
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      lg: "btn-xl"
    ],
    default: :md
  )

  variant(
    :variant,
    [
      default: "",
      solid: "btn-solid",
      outline: "btn-outline",
      light: "btn-light",
      ghost: "btn-ghost",
      link: "btn-link"
    ],
    default: :default
  )

  variant(
    :intent,
    [
      neutral: "",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error"
    ],
    default: :neutral
  )

  attr :type, :string, default: nil
  attr :class, :string, default: nil

  attr :loading, :boolean, default: false, doc: "indicates a loading state"
  attr :disabled, :boolean, default: false, doc: "indicates a disabled state"
  attr :active, :boolean, default: false, doc: "forces the active state"
  attr :rest, :global, include: ~w(form name value method download rel target)

  slot :inner_block, required: true

  def button(assigns) do
    ~H"""
    <button type={@type} class={["btn", "phx-submit-loading:opacity-75", @cva_class, @class]} {@rest}>
      <%= render_slot(@inner_block) %>
    </button>
    """
  end
end
