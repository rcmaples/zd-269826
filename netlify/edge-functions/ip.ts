import type { Config, Context } from '@netlify/edge-functions';
export default async function (_req: Request, context: Context) {
  return Response.json({
    ip3: context.ip,
  });
}
export const config: Config = {
  path: '/ip',
};
