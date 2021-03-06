$.whispermode = $.inidb.get("settings", "whisper_mode");

if ($.whispermode == undefined || $.whispermode == null) {
    $.whispermode = "false";
}

$.getWhisperString = function (sender) {
    if ($.whispermode == "true") {
        return "/w " + sender + " ";
    } else {
        return "@" + $.username.resolve(sender) + " ";
    }
}

$.getWhisperStringStatic = function (sender) {
    return "/w " + sender + " ";
}


$.on('command', function (event) {
    var sender = event.getSender();
    var username = $.username.resolve(sender, event.getTags());
    var command = event.getCommand();
    var argsString = event.getArguments().trim();
    var args = event.getArgs();

    if (command.equalsIgnoreCase("whispermode")) { // enable / disable whisper mode
        if (!$.isAdmin(sender)) {
            $.say($.getWhisperString(sender) + $.lang.get("net.quorrabot.cmd.adminonly"));
            return;
        }

        if ($.whispermode == "true") {
            $.inidb.set('settings', 'whisper_mode', "false");
            $.whispermode = "false";
            $.say($.getWhisperString(sender) + $.lang.get("net.quorrabot.common.whisper-disabled"));
            return;
        } else {
            $.inidb.set('settings', 'whisper_mode', "true");
            $.whispermode = "true";
            $.say($.getWhisperString(sender) + $.lang.get("net.quorrabot.common.whisper-enabled"));
            return;
        }
    }
});

    $.registerChatCommand("./util/whisperSystem.js", "whispermode", "admin");
