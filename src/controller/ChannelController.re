open Express;

module Channels = {

  let getAll =
  PromiseMiddleware.from((_next, req, rep) => {
    ChannelsRepository.Channels.getAll()
    |> Js.Promise.(
         then_(parcoursJson => {
           rep
           |> Response.setHeader("Status", "200")
           |> Response.sendJson(parcoursJson)
           |> resolve
         })
       );
  });



};
