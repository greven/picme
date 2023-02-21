defmodule Picme.MixProject do
  use Mix.Project

  def project do
    [
      app: :picme,
      version: "0.1.0",
      elixir: "~> 1.14",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {Picme.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      # Phoenix Framework
      {:phoenix, "~> 1.7.0-rc.3", override: true},
      {:phoenix_ecto, "~> 4.4"},
      {:phoenix_html, "~> 3.3"},
      {:phoenix_live_view, "~> 0.18.15"},
      {:phoenix_live_reload, "~> 1.4", only: :dev},
      {:phoenix_live_dashboard, "~> 0.7.2"},

      # HTTP server
      {:bandit, ">= 0.6.8"},

      # HTTP Client
      {:finch, "~> 0.14"},

      # Database
      {:ecto_sql, "~> 3.9"},
      {:ecto_sqlite3, ">= 0.0.0"},
      # {:litestream, "~> 0.3.0"},

      # JSON & CSV
      {:jason, "~> 1.4"},

      # Mail
      {:swoosh, "~> 1.9"},

      # i18n
      {:gettext, "~> 0.22"},

      # Telemetry
      {:telemetry_metrics, "~> 0.6"},
      {:telemetry_poller, "~> 1.0"},

      # Securityr
      {:bcrypt_elixir, "~> 3.0"},
      {:comeonin, "~> 5.3"},
      {:sobelow, "~> 0.11", only: :dev},

      # Utils
      {:phoenix_storybook, github: "phenixdigital/phoenix_storybook", only: :dev},
      {:floki, ">= 0.30.0", only: :test},
      {:cva, "~> 0.2"},

      # Assets
      {:lucide_icons, "~> 1.0.0"},

      # Development
      {:credo, "~> 1.6", only: [:dev], runtime: false}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to install project dependencies and perform other setup tasks, run:
  #
  #     $ mix setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      setup: ["deps.get", "ecto.setup", "assets.setup", "assets.build"],
      "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"],
      "assets.setup": ["cmd npm install --prefix assets"],
      "assets.build": ["cmd npm run build --prefix assets"],
      "assets.deploy": ["assets.build", "phx.digest"]
    ]
  end
end
