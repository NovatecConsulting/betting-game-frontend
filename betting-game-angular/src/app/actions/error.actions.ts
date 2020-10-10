export class LoadingDataFromBackendFailed {
  static readonly type = '[Error] Loading Data From Backend';
  constructor(public statusCode: number, public message: string) {}
}
