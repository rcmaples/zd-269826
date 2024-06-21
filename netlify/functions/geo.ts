import type { Config, Context } from '@netlify/functions';
export default async function (_req: Request, context: Context) {
  return Response.json({
    geo9: context.geo,
  });
}
export const config: Config = {
  path: '/geo',
};
///
