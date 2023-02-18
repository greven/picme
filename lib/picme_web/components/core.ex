defmodule PicmeWeb.CoreComponents do
  defmacro __using__(_) do
    quote do
      import PicmeWeb.CoreComponents.{
        Back,
        Button,
        Error,
        Flash,
        Header,
        Input,
        Label,
        List,
        Modal,
        SimpleForm,
        Table
      }

      import PicmeWeb.Components.Helpers
    end
  end
end
