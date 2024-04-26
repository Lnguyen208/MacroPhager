namespace MacroPhager.Server.DTOs.Accounts
{
    public class FriendList
    {
        public int id {  get; set; }
        public string friend_name {  get; set; }
        public byte[] friend_pfp { get; set; }
        public string img_type { get; set; }
        public string friend_email { get; set; }
    }
}
