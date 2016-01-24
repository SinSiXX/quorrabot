/* 
 * Copyright (C) 2015 www.quorrabot.net
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package me.gloriouseggroll.quorrabot.event.irc.message;

import java.util.Map;
import me.gloriouseggroll.quorrabot.jerklib.Channel;
import me.gloriouseggroll.quorrabot.jerklib.Session;

/**
 *
 * @author gmt2001
 */
public class IrcPrivateMessageEvent extends IrcMessageEvent
{

    public IrcPrivateMessageEvent(Session session, String sender, String message)
    {
        super(session, sender, message, null, null);
    }

    public IrcPrivateMessageEvent(Session session, String sender, String message, Map<String, String> tags)
    {
        super(session, sender, message, tags, null);
    }

    public IrcPrivateMessageEvent(Session session, String sender, String message, Map<String, String> tags, Channel channel)
    {
        super(session, sender, message, tags, channel);
    }
}