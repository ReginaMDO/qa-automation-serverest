export class EnvConfig {
  static readonly urlEnvironment: string = process.env.BASE_URL || 'https://front.serverest.dev';
  static readonly urlAdminHome: string = `${EnvConfig.urlEnvironment}/admin/home`;
  static readonly urlUserHome: string = `${EnvConfig.urlEnvironment}/home`;
  static readonly urlRandomUserApi: string = 'https://randomuser.me/api/?nat=br&inc=name,email,login&noinfo';
  static readonly urlAdminListarProdutos: string = `${EnvConfig.urlEnvironment}/admin/listarprodutos`;
  static readonly urlAdminListarUsuarios: string = `${EnvConfig.urlEnvironment}/admin/listarusuarios`;
  static readonly urlLogin: string = `${EnvConfig.urlEnvironment}/login`;
}
