export default abstract class HttpClient {
  abstract read(url: string): Promise<unknown>
}
