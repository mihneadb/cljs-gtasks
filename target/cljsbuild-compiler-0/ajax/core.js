goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('goog.net.XhrManager');
goog.require('cljs.reader');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.Uri.QueryData');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.structs');
goog.require('cljs.reader');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.Uri');
ajax.core.AjaxImpl = {};
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__2950__auto__ = this$;if(and__2950__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__2950__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__3554__auto__ = (((this$ == null))?null:this$);return (function (){var or__2959__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__3554__auto__)]);if(or__2959__auto__)
{return or__2959__auto__;
} else
{var or__2959__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__2959__auto____$1)
{return or__2959__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__4854){var map__4855 = p__4854;var map__4855__$1 = ((cljs.core.seq_QMARK_.call(null,map__4855))?cljs.core.apply.call(null,cljs.core.hash_map,map__4855):map__4855);var timeout = cljs.core.get.call(null,map__4855__$1,new cljs.core.Keyword(null,"timeout","timeout",3994960083));var this$__$1 = this;var G__4856 = this$__$1;goog.events.listen(G__4856,goog.net.EventType.COMPLETE,handler);
G__4856.send(uri,method,body,headers,timeout);
return G__4856;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__4857){var map__4858 = p__4857;var map__4858__$1 = ((cljs.core.seq_QMARK_.call(null,map__4858))?cljs.core.apply.call(null,cljs.core.hash_map,map__4858):map__4858);var max_retries = cljs.core.get.call(null,map__4858__$1,new cljs.core.Keyword(null,"max-retries","max-retries",902021455));var priority = cljs.core.get.call(null,map__4858__$1,new cljs.core.Keyword(null,"priority","priority",4143410454));var timeout = cljs.core.get.call(null,map__4858__$1,new cljs.core.Keyword(null,"timeout","timeout",3994960083));var id = cljs.core.get.call(null,map__4858__$1,new cljs.core.Keyword(null,"id","id",1013907597));var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status,null], true),cljs.core.PersistentVector.fromArray([200,201,202,204,205,206], true));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string.call(null,xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"read","read",1017400584),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",3584325486),"EDN"], true);
});
ajax.core.edn_request_format = (function edn_request_format(){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"write","write",1127304017),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",1799574400),"application/edn"], true);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"write","write",1127304017),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",1799574400),"application/x-www-form-urlencoded"], true);
});
ajax.core.raw_response_format = (function raw_response_format(){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"read","read",1017400584),ajax.core.read_text,new cljs.core.Keyword(null,"description","description",3584325486),"raw text"], true);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function json_request_format(){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"write","write",1127304017),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",1799574400),"application/json"], true);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__4859){var map__4861 = p__4859;var map__4861__$1 = ((cljs.core.seq_QMARK_.call(null,map__4861))?cljs.core.apply.call(null,cljs.core.hash_map,map__4861):map__4861);var keywords_QMARK_ = cljs.core.get.call(null,map__4861__$1,new cljs.core.Keyword(null,"keywords?","keywords?",4346628423));var prefix = cljs.core.get.call(null,map__4861__$1,new cljs.core.Keyword(null,"prefix","prefix",4328760836));return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"read","read",1017400584),(function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),keywords_QMARK_);
}),new cljs.core.Keyword(null,"description","description",3584325486),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], true);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = xhrio.getResponseHeader("Content-Type");var format = (cljs.core.truth_((function (){var and__2950__auto__ = ct;if(cljs.core.truth_(and__2950__auto__))
{return (ct.indexOf("json") >= 0);
} else
{return and__2950__auto__;
}
})())?ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format.call(null));return cljs.core.update_in.call(null,format,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"description","description",3584325486)], true),(function (p1__4862_SHARP_){return [cljs.core.str(p1__4862_SHARP_),cljs.core.str(" (default)")].join('');
}));
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.call(null,format,new cljs.core.Keyword(null,"write","write",1127304017));
});
ajax.core.codec = (function codec(request_format,p__4863){var map__4865 = p__4863;var map__4865__$1 = ((cljs.core.seq_QMARK_.call(null,map__4865))?cljs.core.apply.call(null,cljs.core.hash_map,map__4865):map__4865);var response_format = map__4865__$1;var description = cljs.core.get.call(null,map__4865__$1,new cljs.core.Keyword(null,"description","description",3584325486));var read = cljs.core.get.call(null,map__4865__$1,new cljs.core.Keyword(null,"read","read",1017400584));return cljs.core.assoc.call(null,request_format,new cljs.core.Keyword(null,"read","read",1017400584),read,new cljs.core.Keyword(null,"description","description",3584325486),description);
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.ifn_QMARK_.call(null,format))
{return ajax.core.codec.call(null,ajax.core.url_request_format.call(null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"read","read",1017400584),format,new cljs.core.Keyword(null,"description","description",3584325486),"custom"], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__4866,xhrio){var map__4868 = p__4866;var map__4868__$1 = ((cljs.core.seq_QMARK_.call(null,map__4868))?cljs.core.apply.call(null,cljs.core.hash_map,map__4868):map__4868);var description = cljs.core.get.call(null,map__4868__$1,new cljs.core.Keyword(null,"description","description",3584325486));var response = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"response","response",673580979),null], true);var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",4371493274),status_text,new cljs.core.Keyword(null,"is-parse-error","is-parse-error",4116943293),true,new cljs.core.Keyword(null,"original-text","original-text",2831108891),xhrio.getResponseText());if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return parse_error;
} else
{return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",4371493274),xhrio.getStatusText(),new cljs.core.Keyword(null,"parse-error","parse-error",3528843744),parse_error);
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();var format__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"read","read",1017400584).cljs$core$IFn$_invoke$arity$1(format))?format:get_default_format.call(null,xhrio));var parse = new cljs.core.Keyword(null,"read","read",1017400584).cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = parse.call(null,xhrio);if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return cljs.core.PersistentVector.fromArray([true,response__$1], true);
} else
{return cljs.core.PersistentVector.fromArray([false,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"status-text","status-text",4371493274),xhrio.getStatusText(),new cljs.core.Keyword(null,"response","response",673580979),response__$1], true)], true);
}
}catch (e4872){if((e4872 instanceof Object))
{var e = e4872;return cljs.core.PersistentVector.fromArray([false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e4872;
} else
{return null;
}
}
}}catch (e4871){if((e4871 instanceof Object))
{var e = e4871;return cljs.core.PersistentVector.fromArray([false,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"status","status",4416389988),0,new cljs.core.Keyword(null,"status-text","status-text",4371493274),e.message,new cljs.core.Keyword(null,"response","response",673580979),null], true)], true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e4871;
} else
{return null;
}
}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__4873,p__4874){var map__4878 = p__4873;var map__4878__$1 = ((cljs.core.seq_QMARK_.call(null,map__4878))?cljs.core.apply.call(null,cljs.core.hash_map,map__4878):map__4878);var format = map__4878__$1;var content_type = cljs.core.get.call(null,map__4878__$1,new cljs.core.Keyword(null,"content-type","content-type",1799574400));var write = cljs.core.get.call(null,map__4878__$1,new cljs.core.Keyword(null,"write","write",1127304017));var map__4879 = p__4874;var map__4879__$1 = ((cljs.core.seq_QMARK_.call(null,map__4879))?cljs.core.apply.call(null,cljs.core.hash_map,map__4879):map__4879);var headers = cljs.core.get.call(null,map__4879__$1,new cljs.core.Keyword(null,"headers","headers",1809212152));var params = cljs.core.get.call(null,map__4879__$1,new cljs.core.Keyword(null,"params","params",4313443576));if(cljs.core._EQ_.call(null,method,"GET"))
{return cljs.core.PersistentVector.fromArray([ajax.core.uri_with_params.call(null,uri,params),null,headers], true);
} else
{var map__4880 = format;var map__4880__$1 = ((cljs.core.seq_QMARK_.call(null,map__4880))?cljs.core.apply.call(null,cljs.core.hash_map,map__4880):map__4880);var content_type__$1 = cljs.core.get.call(null,map__4880__$1,new cljs.core.Keyword(null,"content-type","content-type",1799574400));var write__$1 = cljs.core.get.call(null,map__4880__$1,new cljs.core.Keyword(null,"write","write",1127304017));var body = write__$1.call(null,params);var content_type__$2 = (cljs.core.truth_(content_type__$1)?cljs.core.PersistentArrayMap.fromArray(["Content-Type",content_type__$1], true):null);var headers__$1 = cljs.core.merge.call(null,(function (){var or__2959__auto__ = headers;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2);return cljs.core.PersistentVector.fromArray([uri,body,headers__$1], true);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__4881){var map__4883 = p__4881;var map__4883__$1 = ((cljs.core.seq_QMARK_.call(null,map__4883))?cljs.core.apply.call(null,cljs.core.hash_map,map__4883):map__4883);var get_default_format = cljs.core.get.call(null,map__4883__$1,new cljs.core.Keyword(null,"get-default-format","get-default-format",1021569996));var handler = cljs.core.get.call(null,map__4883__$1,new cljs.core.Keyword(null,"handler","handler",1706707644));return (function (xhrio){return handler.call(null,ajax.core.interpret_response.call(null,format,xhrio,(function (){var or__2959__auto__ = get_default_format;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
} else
{return ajax.core.no_format;
}
})()));
});
});
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__3 = (function (uri,method,opts){return ajax_request.call(null,uri,method,opts,(new goog.net.XhrIo()));
});
var ajax_request__4 = (function (uri,method,p__4884,js_ajax){var map__4887 = p__4884;var map__4887__$1 = ((cljs.core.seq_QMARK_.call(null,map__4887))?cljs.core.apply.call(null,cljs.core.hash_map,map__4887):map__4887);var opts = map__4887__$1;var format = cljs.core.get.call(null,map__4887__$1,new cljs.core.Keyword(null,"format","format",4040092521));var format__$1 = ajax.core.get_format.call(null,format);var method__$1 = ajax.core.normalize_method.call(null,method);var vec__4888 = ajax.core.process_inputs.call(null,uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.call(null,vec__4888,0,null);var body = cljs.core.nth.call(null,vec__4888,1,null);var headers = cljs.core.nth.call(null,vec__4888,2,null);var handler = ajax.core.base_handler.call(null,format__$1,opts);return ajax.core._js_ajax_request.call(null,js_ajax,uri__$1,method__$1,body,cljs.core.clj__GT_js.call(null,headers),handler,opts);
});
ajax_request = function(uri,method,p__4884,js_ajax){
switch(arguments.length){
case 3:
return ajax_request__3.call(this,uri,method,p__4884);
case 4:
return ajax_request__4.call(this,uri,method,p__4884,js_ajax);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$core$IFn$_invoke$arity$3 = ajax_request__3;
ajax_request.cljs$core$IFn$_invoke$arity$4 = ajax_request__4;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return ajax.core.codec.call(null,ajax.core.json_request_format.call(null),ajax.core.json_response_format.call(null,format_params));
});
ajax.core.edn_format = (function edn_format(){return ajax.core.codec.call(null,ajax.core.edn_request_format.call(null),ajax.core.edn_response_format.call(null));
});
ajax.core.raw_format = (function raw_format(){return ajax.core.codec.call(null,ajax.core.url_request_format.call(null),ajax.core.raw_response_format.call(null));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__4890 = format;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"url","url",1014020321),G__4890))
{return ajax.core.url_request_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"raw","raw",1014016922),G__4890))
{return ajax.core.url_request_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1014004513),G__4890))
{return ajax.core.edn_request_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1017176154),G__4890))
{return ajax.core.json_request_format.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){var G__4892 = format;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"raw","raw",1014016922),G__4892))
{return ajax.core.raw_response_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1014004513),G__4892))
{return ajax.core.edn_response_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1017176154),G__4892))
{return ajax.core.json_response_format.call(null,format_params);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__4893){var map__4898 = p__4893;var map__4898__$1 = ((cljs.core.seq_QMARK_.call(null,map__4898))?cljs.core.apply.call(null,cljs.core.hash_map,map__4898):map__4898);var error_handler = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671));var handler = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"handler","handler",1706707644));return (function easy_handler(p__4899){var vec__4901 = p__4899;var ok = cljs.core.nth.call(null,vec__4901,0,null);var result = cljs.core.nth.call(null,vec__4901,1,null);var temp__4090__auto__ = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4090__auto__))
{var h = temp__4090__auto__;return h.call(null,result);
} else
{return null;
}
});
});
ajax.core.transform_format = (function transform_format(p__4902){var map__4904 = p__4902;var map__4904__$1 = ((cljs.core.seq_QMARK_.call(null,map__4904))?cljs.core.apply.call(null,cljs.core.hash_map,map__4904):map__4904);var opts = map__4904__$1;var response_format = cljs.core.get.call(null,map__4904__$1,new cljs.core.Keyword(null,"response-format","response-format",4250805877));var format = cljs.core.get.call(null,map__4904__$1,new cljs.core.Keyword(null,"format","format",4040092521));var rf = ajax.core.keyword_response_format.call(null,response_format,opts);if((format == null))
{return ajax.core.codec.call(null,ajax.core.edn_request_format.call(null),rf);
} else
{if((format instanceof cljs.core.Keyword))
{return ajax.core.codec.call(null,ajax.core.keyword_request_format.call(null,format,opts),rf);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",1706707644),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.transform_format.call(null,opts),new cljs.core.Keyword(null,"get-default-format","get-default-format",1021569996),ajax.core.get_default_format);
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the deserialized
* response
* :error-handler - the handler function for errors, should accept a map
* with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__4905){var vec__4907 = p__4905;var opts = cljs.core.nth.call(null,vec__4907,0,null);return ajax.core.ajax_request.call(null,uri,"GET",ajax.core.transform_opts.call(null,opts));
};
var GET = function (uri,var_args){
var p__4905 = null;if (arguments.length > 1) {
  p__4905 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__4905);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__4908){
var uri = cljs.core.first(arglist__4908);
var p__4905 = cljs.core.rest(arglist__4908);
return GET__delegate(uri,p__4905);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the deserialized
* response
* :error-handler - the handler function for errors, should accept a map
* with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__4909){var vec__4911 = p__4909;var opts = cljs.core.nth.call(null,vec__4911,0,null);return ajax.core.ajax_request.call(null,uri,"POST",ajax.core.transform_opts.call(null,opts));
};
var POST = function (uri,var_args){
var p__4909 = null;if (arguments.length > 1) {
  p__4909 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__4909);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__4912){
var uri = cljs.core.first(arglist__4912);
var p__4909 = cljs.core.rest(arglist__4912);
return POST__delegate(uri,p__4909);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
