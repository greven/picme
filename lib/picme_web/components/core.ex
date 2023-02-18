defmodule PicmeWeb.CoreComponents do
  defmacro __using__(_) do
    quote do
      import PicmeWeb.CoreComponents.{
        Button,
        Error,
        Flash,
        Form,
        Header,
        Input,
        Label,
        Link,
        List,
        Modal,
        Table
      }

      import PicmeWeb.Components.Helpers
    end
  end
end
