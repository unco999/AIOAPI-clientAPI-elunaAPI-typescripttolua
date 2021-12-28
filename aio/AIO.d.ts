declare namespace AIO {
  /**
   * 将当前文件作为AIO发送的插件添加。  
   * 可以从服务器和客户端使用，但在客户端什么都不做。  
   * 你可以提供lua文件的路径和/或名称来添加，但如果  
   * 省略函数执行的文件将被用作路径  
   * 和路径或给定路径的文件名将被使用。  
   * 如果addon被添加，返回true  
   */
  /**@noSelf */
  function AddAddon(path?: string, name?: string): boolean;
  /**
   * 
   *为AIO添加一个新的回调函数，调用if  
   *接收到一个同名的块。  
   *客户端发送的所有参数都将在调用时传递给func  
   *只有一个函数可以作为一个名称的处理程序(subject for change)  
   */
  /**@noSelf */
  function RegisterEvent(name: string, func: Function): void;

  /**
   * 
   * 为指定的名称添加一个处理函数表。  
   * 你可以用函数填充一个表，并使用这个来添加它们的名称。  
   * 当一个消息像AIO.Msg():Add(“MyName”，“HandlerName”):Send()  
   * 被接收，handlertable["HandlerName"]将被执行，玩家和额外的参数传递到块。  
   * 返回传入的表  
   */
  /**@noSelf */
  function AddHandlers(name: string, handlertable: handlertable): handlertable;

  /**
   * 
   * 为指定的名称添加一个处理函数表。  
   * 你可以用函数填充一个表，并使用这个来添加它们的名称。  
   * 当一个消息像AIO.Msg():Add(“MyName”，“HandlerName”):Send()  
   * 被接收，handlertable["HandlerName"]将被执行，玩家和额外的参数传递到块。  
   * 返回传入的表  
   */
  /**@noSelf */
  function AddHandlers(name: string, handlertable: handlertable): handlertable;

  /**
   * 
   *  为处理程序发送消息的缩写。 
   */
  /**@noSelf */
  function Handle(name: string, handlername: string, ...args): void

  /**
  *在登录时将插件代码添加到发送的插件。  
  *插件代码是根据设置在这个文件的顶部。  
  *插件会缓存在客户端，如果需要的话会更新。  
  *name是插件的唯一ID，通常你可以使用文件名或插件名  
  *请注意，短的名称更好，因为它们来回发送以标识文件  
  */
  /**@noSelf */
  function AddAddonCode(name: string, code: string): void

  /**
  * Key是全局表_G中一个变量的Key  
  * 变量会在玩家退出游戏时存储，并会被恢复  
  * ——当他在插件代码运行之前重新登录时  
  * ——这些变量是帐户绑定的  
  */
  /**@noSelf */
  function AddSavedVar(key: string): void


  /**
  *Key是全局表_G中一个变量的Key  
  *变量会在玩家退出游戏时存储，并会被恢复  
  *当他在插件代码运行之前重新登录时  
  *这些变量是字符限制的  
  */
  /**@noSelf */
  function AddSavedVarChar(key: string): void

  /**
  *使帧保存它的位置在重新登录  
  *如果char为true，位置保存为字符绑定，否则为帐户绑定  
*/
  /**@noSelf */
  function SavePosition(frame: frame, char: string): void

  /**
  *使帧保存它的位置在重新登录  
  *如果char为true，位置保存为字符绑定，否则为帐户绑定  
  */
  /**@noSelf */
  function SavePosition(frame: frame, char: string): void


  /**
  *添加一个新函数，当init消息时调用  
  *即将被服务器发送。 函数在发送和之前被调用  
  *信息会随着玩家一起传递:  
  *func(味精(球员))  
  *您可以修改传递的消息和或返回一个新的  
*/
  /**@noSelf */
  function AddOnInit(func: function): void

      /**
     * 创建并返回一个新的消息，您可以添加东西并发送到客户端或服务器  
     * 示例:AIO.Msg():Add(“MyHandlerName”，param1, param2):Send(player)  
     */
    /**@noSelf */
    function Msg():msg

  declare namespace AIO_HANDLERS {
    /**@noSelf */
    function init(player:Player, version, clientdata)
    /**
     * 
     * 强制重载用户的UI在下一步的行动  
     */
    /**@noSelf */
    function ForceReload(player:Player)
     /**
     * 
     * 强制重载用户的UI在下一步的行动  
     */
    /**@noSelf */
    function ForceReset(player:Player)

  }


}

declare interface msg{
  Add(Handle:string,...args):msg
  Send(Player?:Player):void
}

declare function tostring(obj:any):string;
declare function time():number;