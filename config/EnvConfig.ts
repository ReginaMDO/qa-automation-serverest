export class EnvConfig {
  static readonly urlEnvironment: string = process.env.BASE_URL || 'https://front.serverest.dev';
  static readonly urlAdminHome: string = `${EnvConfig.urlEnvironment}/admin/home`;
  static readonly urlUserHome: string = `${EnvConfig.urlEnvironment}/home`;
  static readonly urlRandomUserApi: string = 'https://randomuser.me/api/?nat=br&inc=name,email,login&noinfo';
}
