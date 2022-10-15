import { rest } from "msw";

export const handlers = [
  rest.get("/list", (req, res, ctx) => {
    return res(
      ctx.json({
        lissst: [
          {
            id: "0",
            title: "item 1"
          },
          {
            id: "1",
            title: "item 2"
          }
        ]
      })
    );
  })
];
