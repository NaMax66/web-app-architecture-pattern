export default abstract class HttpClient {
  abstract get(url: string): Promise<unknown>
}
