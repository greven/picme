defmodule Picme.Repo do
  use Ecto.Repo,
    otp_app: :picme,
    adapter: Ecto.Adapters.SQLite3
end
