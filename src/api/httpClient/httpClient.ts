export default abstract class HttpClient {
  abstract get(url: string): Promise<unknown>

  abstract post(url: string, params: Record<string, unknown>): Promise<unknown>
}
