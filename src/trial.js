< !doctype html >
  <html lang=en>
    <head>
      <title>sqlalchemy.exc.OperationalError: (sqlite3.OperationalError) no such table: user
        [SQL: SELECT user.id AS user_id, user.first_name AS user_first_name, user.last_name AS user_last_name, user.email AS user_email, user.password AS user_password
        FROM user
        WHERE user.email = ?
        LIMIT ? OFFSET ?]
        [parameters: (&#39;test@example.com&#39;, 1, 0)]
        (Background on this error at: https://sqlalche.me/e/20/e3q8)
 // Werkzeug Debugger</title>
      <link rel="stylesheet" href="?__debugger__=yes&amp;cmd=resource&amp;f=style.css">
        <link rel="shortcut icon"
          href="?__debugger__=yes&amp;cmd=resource&amp;f=console.png">
          <script src="?__debugger__=yes&amp;cmd=resource&amp;f=debugger.js"></script>
          <script>
            var CONSOLE_MODE = false,
            EVALEX = true,
            EVALEX_TRUSTED = false,
            SECRET = "cTiSAbuLJo05kls7CX9P";
          </script>
        </head>
        <body style="background-color: #fff">
          <div class="debugger">
            <h1>OperationalError</h1>
            <div class="detail">
              <p class="errormsg">sqlalchemy.exc.OperationalError: (sqlite3.OperationalError) no such table: user
                [SQL: SELECT user.id AS user_id, user.first_name AS user_first_name, user.last_name AS user_last_name, user.email AS user_email, user.password AS user_password
                FROM user
                WHERE user.email = ?
                LIMIT ? OFFSET ?]
                [parameters: (&#39;test@example.com&#39;, 1, 0)]
                (Background on this error at: https://sqlalche.me/e/20/e3q8)
              </p>
            </div>
            <h2 class="traceback">Traceback <em>(most recent call last)</em></h2>
            <div class="traceback">
              <h3></h3>
              <ul><li><div class="frame" id="frame-140682716097984">
                <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py"</cite>,
                  line <em class="line">1967</em>,
                  in <code class="function">_exec_single_context</code></h4>
                <div class="source library"><pre class="line before"><span class="ws">                            </span>context,</pre>
                  <pre class="line before"><span class="ws">                        </span>):</pre>
                  <pre class="line before"><span class="ws">                            </span>evt_handled = True</pre>
                  <pre class="line before"><span class="ws">                            </span>break</pre>
                  <pre class="line before"><span class="ws">                </span>if not evt_handled:</pre>
                  <pre class="line current"><span class="ws">                    </span>self.dialect.do_execute(</pre>
                  <pre class="line after"><span class="ws">                        </span>cursor, str_statement, effective_parameters, context</pre>
                  <pre class="line after"><span class="ws">                    </span>)</pre>
                  <pre class="line after"><span class="ws"></span> </pre>
                  <pre class="line after"><span class="ws">            </span>if self._has_events or self.engine._has_events:</pre>
                  <pre class="line after"><span class="ws">                </span>self.dispatch.after_cursor_execute(</pre></div>
              </div>

                <li><div class="frame" id="frame-140682716098096">
                  <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/default.py"</cite>,
                    line <em class="line">924</em>,
                    in <code class="function">do_execute</code></h4>
                  <div class="source library"><pre class="line before"><span class="ws"></span> </pre>
                    <pre class="line before"><span class="ws">    </span>def do_executemany(self, cursor, statement, parameters, context=None):</pre>
                    <pre class="line before"><span class="ws">        </span>cursor.executemany(statement, parameters)</pre>
                    <pre class="line before"><span class="ws"></span> </pre>
                    <pre class="line before"><span class="ws">    </span>def do_execute(self, cursor, statement, parameters, context=None):</pre>
                    <pre class="line current"><span class="ws">        </span>cursor.execute(statement, parameters)</pre>
                    <pre class="line after"><span class="ws"></span> </pre>
                    <pre class="line after"><span class="ws">    </span>def do_execute_no_params(self, cursor, statement, context=None):</pre>
                    <pre class="line after"><span class="ws">        </span>cursor.execute(statement)</pre>
                    <pre class="line after"><span class="ws"></span> </pre>
                    <pre class="line after"><span class="ws">    </span>def is_disconnect(self, e, connection, cursor):</pre></div>
                </div>

                  <li><div class="exc-divider">The above exception was the direct cause of the following exception:</div>
                    <li><div class="frame" id="frame-140682803849232">
                      <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py"</cite>,
                        line <em class="line">1498</em>,
                        in <code class="function">__call__</code></h4>
                      <div class="source library"><pre class="line before"><span class="ws">    </span>) -&gt; cabc.Iterable[bytes]:</pre>
                        <pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;The WSGI server calls the Flask application object as the</pre>
                        <pre class="line before"><span class="ws">        </span>WSGI application. This calls :meth:`wsgi_app`, which can be</pre>
                        <pre class="line before"><span class="ws">        </span>wrapped to apply middleware.</pre>
                        <pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                        <pre class="line current"><span class="ws">        </span>return self.wsgi_app(environ, start_response)</pre></div>
                    </div>

                      <li><div class="frame" id="frame-140682718232160">
                        <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py"</cite>,
                          line <em class="line">1476</em>,
                          in <code class="function">wsgi_app</code></h4>
                        <div class="source library"><pre class="line before"><span class="ws">            </span>try:</pre>
                          <pre class="line before"><span class="ws">                </span>ctx.push()</pre>
                          <pre class="line before"><span class="ws">                </span>response = self.full_dispatch_request()</pre>
                          <pre class="line before"><span class="ws">            </span>except Exception as e:</pre>
                          <pre class="line before"><span class="ws">                </span>error = e</pre>
                          <pre class="line current"><span class="ws">                </span>response = self.handle_exception(e)</pre>
                          <pre class="line after"><span class="ws">            </span>except:  # noqa: B001</pre>
                          <pre class="line after"><span class="ws">                </span>error = sys.exc_info()[1]</pre>
                          <pre class="line after"><span class="ws">                </span>raise</pre>
                          <pre class="line after"><span class="ws">            </span>return response(environ, start_response)</pre>
                          <pre class="line after"><span class="ws">        </span>finally:</pre></div>
                      </div>

                        <li><div class="frame" id="frame-140682718232272">
                          <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py"</cite>,
                            line <em class="line">671</em>,
                            in <code class="function">error_router</code></h4>
                          <div class="source library"><pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                            <pre class="line before"><span class="ws">        </span>if self._has_fr_route():</pre>
                            <pre class="line before"><span class="ws">            </span>try:</pre>
                            <pre class="line before"><span class="ws">                </span>return self.handle_error(e)</pre>
                            <pre class="line before"><span class="ws">            </span>except Exception as f:</pre>
                            <pre class="line current"><span class="ws">                </span>return original_handler(f)</pre>
                            <pre class="line after"><span class="ws">        </span>return original_handler(e)</pre>
                            <pre class="line after"><span class="ws"></span> </pre>
                            <pre class="line after"><span class="ws">    </span>def _propagate_exceptions(self):</pre>
                            <pre class="line after"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                            <pre class="line after"><span class="ws">        </span>Returns the value of the ``PROPAGATE_EXCEPTIONS`` configuration</pre></div>
                        </div>

                          <li><div class="frame" id="frame-140682718313184">
                            <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_cors/extension.py"</cite>,
                              line <em class="line">178</em>,
                              in <code class="function">wrapped_function</code></h4>
                            <div class="source library"><pre class="line before"><span class="ws">        </span># Wrap exception handlers with cross_origin</pre>
                              <pre class="line before"><span class="ws">        </span># These error handlers will still respect the behavior of the route</pre>
                              <pre class="line before"><span class="ws">        </span>if options.get(&#39;intercept_exceptions&#39;, True):</pre>
                              <pre class="line before"><span class="ws">            </span>def _after_request_decorator(f):</pre>
                              <pre class="line before"><span class="ws">                </span>def wrapped_function(*args, **kwargs):</pre>
                              <pre class="line current"><span class="ws">                    </span>return cors_after_request(app.make_response(f(*args, **kwargs)))</pre>
                              <pre class="line after"><span class="ws">                </span>return wrapped_function</pre>
                              <pre class="line after"><span class="ws"></span> </pre>
                              <pre class="line after"><span class="ws">            </span>if hasattr(app, &#39;handle_exception&#39;):</pre>
                              <pre class="line after"><span class="ws">                </span>app.handle_exception = _after_request_decorator(</pre>
                              <pre class="line after"><span class="ws">                    </span>app.handle_exception)</pre></div>
                          </div>

                            <li><div class="frame" id="frame-140682718398160">
                              <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py"</cite>,
                                line <em class="line">669</em>,
                                in <code class="function">error_router</code></h4>
                              <div class="source library"><pre class="line before"><span class="ws">        </span>:param function original_handler: the original Flask error handler for the app</pre>
                                <pre class="line before"><span class="ws">        </span>:param Exception e: the exception raised while handling the request</pre>
                                <pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                                <pre class="line before"><span class="ws">        </span>if self._has_fr_route():</pre>
                                <pre class="line before"><span class="ws">            </span>try:</pre>
                                <pre class="line current"><span class="ws">                </span>return self.handle_error(e)</pre>
                                <pre class="line after"><span class="ws">            </span>except Exception as f:</pre>
                                <pre class="line after"><span class="ws">                </span>return original_handler(f)</pre>
                                <pre class="line after"><span class="ws">        </span>return original_handler(e)</pre>
                                <pre class="line after"><span class="ws"></span> </pre>
                                <pre class="line after"><span class="ws">    </span>def _propagate_exceptions(self):</pre></div>
                            </div>

                              <li><div class="frame" id="frame-140682718398272">
                                <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py"</cite>,
                                  line <em class="line">1473</em>,
                                  in <code class="function">wsgi_app</code></h4>
                                <div class="source library"><pre class="line before"><span class="ws">        </span>ctx = self.request_context(environ)</pre>
                                  <pre class="line before"><span class="ws">        </span>error: BaseException | None = None</pre>
                                  <pre class="line before"><span class="ws">        </span>try:</pre>
                                  <pre class="line before"><span class="ws">            </span>try:</pre>
                                  <pre class="line before"><span class="ws">                </span>ctx.push()</pre>
                                  <pre class="line current"><span class="ws">                </span>response = self.full_dispatch_request()</pre>
                                  <pre class="line after"><span class="ws">            </span>except Exception as e:</pre>
                                  <pre class="line after"><span class="ws">                </span>error = e</pre>
                                  <pre class="line after"><span class="ws">                </span>response = self.handle_exception(e)</pre>
                                  <pre class="line after"><span class="ws">            </span>except:  # noqa: B001</pre>
                                  <pre class="line after"><span class="ws">                </span>error = sys.exc_info()[1]</pre></div>
                              </div>

                                <li><div class="frame" id="frame-140682718398384">
                                  <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py"</cite>,
                                    line <em class="line">882</em>,
                                    in <code class="function">full_dispatch_request</code></h4>
                                  <div class="source library"><pre class="line before"><span class="ws">            </span>request_started.send(self, _async_wrapper=self.ensure_sync)</pre>
                                    <pre class="line before"><span class="ws">            </span>rv = self.preprocess_request()</pre>
                                    <pre class="line before"><span class="ws">            </span>if rv is None:</pre>
                                    <pre class="line before"><span class="ws">                </span>rv = self.dispatch_request()</pre>
                                    <pre class="line before"><span class="ws">        </span>except Exception as e:</pre>
                                    <pre class="line current"><span class="ws">            </span>rv = self.handle_user_exception(e)</pre>
                                    <pre class="line after"><span class="ws">        </span>return self.finalize_request(rv)</pre>
                                    <pre class="line after"><span class="ws"></span> </pre>
                                    <pre class="line after"><span class="ws">    </span>def finalize_request(</pre>
                                    <pre class="line after"><span class="ws">        </span>self,</pre>
                                    <pre class="line after"><span class="ws">        </span>rv: ft.ResponseReturnValue | HTTPException,</pre></div>
                                </div>

                                  <li><div class="frame" id="frame-140682718398496">
                                    <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py"</cite>,
                                      line <em class="line">671</em>,
                                      in <code class="function">error_router</code></h4>
                                    <div class="source library"><pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                                      <pre class="line before"><span class="ws">        </span>if self._has_fr_route():</pre>
                                      <pre class="line before"><span class="ws">            </span>try:</pre>
                                      <pre class="line before"><span class="ws">                </span>return self.handle_error(e)</pre>
                                      <pre class="line before"><span class="ws">            </span>except Exception as f:</pre>
                                      <pre class="line current"><span class="ws">                </span>return original_handler(f)</pre>
                                      <pre class="line after"><span class="ws">        </span>return original_handler(e)</pre>
                                      <pre class="line after"><span class="ws"></span> </pre>
                                      <pre class="line after"><span class="ws">    </span>def _propagate_exceptions(self):</pre>
                                      <pre class="line after"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                                      <pre class="line after"><span class="ws">        </span>Returns the value of the ``PROPAGATE_EXCEPTIONS`` configuration</pre></div>
                                  </div>

                                    <li><div class="frame" id="frame-140682718398608">
                                      <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_cors/extension.py"</cite>,
                                        line <em class="line">178</em>,
                                        in <code class="function">wrapped_function</code></h4>
                                      <div class="source library"><pre class="line before"><span class="ws">        </span># Wrap exception handlers with cross_origin</pre>
                                        <pre class="line before"><span class="ws">        </span># These error handlers will still respect the behavior of the route</pre>
                                        <pre class="line before"><span class="ws">        </span>if options.get(&#39;intercept_exceptions&#39;, True):</pre>
                                        <pre class="line before"><span class="ws">            </span>def _after_request_decorator(f):</pre>
                                        <pre class="line before"><span class="ws">                </span>def wrapped_function(*args, **kwargs):</pre>
                                        <pre class="line current"><span class="ws">                    </span>return cors_after_request(app.make_response(f(*args, **kwargs)))</pre>
                                        <pre class="line after"><span class="ws">                </span>return wrapped_function</pre>
                                        <pre class="line after"><span class="ws"></span> </pre>
                                        <pre class="line after"><span class="ws">            </span>if hasattr(app, &#39;handle_exception&#39;):</pre>
                                        <pre class="line after"><span class="ws">                </span>app.handle_exception = _after_request_decorator(</pre>
                                        <pre class="line after"><span class="ws">                    </span>app.handle_exception)</pre></div>
                                    </div>

                                      <li><div class="frame" id="frame-140682718398720">
                                        <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py"</cite>,
                                          line <em class="line">669</em>,
                                          in <code class="function">error_router</code></h4>
                                        <div class="source library"><pre class="line before"><span class="ws">        </span>:param function original_handler: the original Flask error handler for the app</pre>
                                          <pre class="line before"><span class="ws">        </span>:param Exception e: the exception raised while handling the request</pre>
                                          <pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                                          <pre class="line before"><span class="ws">        </span>if self._has_fr_route():</pre>
                                          <pre class="line before"><span class="ws">            </span>try:</pre>
                                          <pre class="line current"><span class="ws">                </span>return self.handle_error(e)</pre>
                                          <pre class="line after"><span class="ws">            </span>except Exception as f:</pre>
                                          <pre class="line after"><span class="ws">                </span>return original_handler(f)</pre>
                                          <pre class="line after"><span class="ws">        </span>return original_handler(e)</pre>
                                          <pre class="line after"><span class="ws"></span> </pre>
                                          <pre class="line after"><span class="ws">    </span>def _propagate_exceptions(self):</pre></div>
                                      </div>

                                        <li><div class="frame" id="frame-140682718398832">
                                          <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py"</cite>,
                                            line <em class="line">880</em>,
                                            in <code class="function">full_dispatch_request</code></h4>
                                          <div class="source library"><pre class="line before"><span class="ws"></span> </pre>
                                            <pre class="line before"><span class="ws">        </span>try:</pre>
                                            <pre class="line before"><span class="ws">            </span>request_started.send(self, _async_wrapper=self.ensure_sync)</pre>
                                            <pre class="line before"><span class="ws">            </span>rv = self.preprocess_request()</pre>
                                            <pre class="line before"><span class="ws">            </span>if rv is None:</pre>
                                            <pre class="line current"><span class="ws">                </span>rv = self.dispatch_request()</pre>
                                            <pre class="line after"><span class="ws">        </span>except Exception as e:</pre>
                                            <pre class="line after"><span class="ws">            </span>rv = self.handle_user_exception(e)</pre>
                                            <pre class="line after"><span class="ws">        </span>return self.finalize_request(rv)</pre>
                                            <pre class="line after"><span class="ws"></span> </pre>
                                            <pre class="line after"><span class="ws">    </span>def finalize_request(</pre></div>
                                        </div>

                                          <li><div class="frame" id="frame-140682718398944">
                                            <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py"</cite>,
                                              line <em class="line">865</em>,
                                              in <code class="function">dispatch_request</code></h4>
                                            <div class="source library"><pre class="line before"><span class="ws">            </span>and req.method == &#34;OPTIONS&#34;</pre>
                                              <pre class="line before"><span class="ws">        </span>):</pre>
                                              <pre class="line before"><span class="ws">            </span>return self.make_default_options_response()</pre>
                                              <pre class="line before"><span class="ws">        </span># otherwise dispatch to the handler for that endpoint</pre>
                                              <pre class="line before"><span class="ws">        </span>view_args: dict[str, t.Any] = req.view_args  # type: ignore[assignment]</pre>
                                              <pre class="line current"><span class="ws">        </span>return self.ensure_sync(self.view_functions[rule.endpoint])(**view_args)  # type: ignore[no-any-return]</pre>
                                              <pre class="line after"><span class="ws"></span> </pre>
                                              <pre class="line after"><span class="ws">    </span>def full_dispatch_request(self) -&gt; Response:</pre>
                                              <pre class="line after"><span class="ws">        </span>&#34;&#34;&#34;Dispatches the request and on top of that performs request</pre>
                                              <pre class="line after"><span class="ws">        </span>pre and postprocessing as well as HTTP exception catching and</pre>
                                              <pre class="line after"><span class="ws">        </span>error handling.</pre></div>
                                          </div>

                                            <li><div class="frame" id="frame-140682718399056">
                                              <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py"</cite>,
                                                line <em class="line">402</em>,
                                                in <code class="function">wrapper</code></h4>
                                              <div class="source library"><pre class="line before"><span class="ws">        </span>:param resource: The resource as a flask view function</pre>
                                                <pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                                                <pre class="line before"><span class="ws"></span> </pre>
                                                <pre class="line before"><span class="ws">        </span>@wraps(resource)</pre>
                                                <pre class="line before"><span class="ws">        </span>def wrapper(*args, **kwargs):</pre>
                                                <pre class="line current"><span class="ws">            </span>resp = resource(*args, **kwargs)</pre>
                                                <pre class="line after"><span class="ws">            </span>if isinstance(resp, BaseResponse):</pre>
                                                <pre class="line after"><span class="ws">                </span>return resp</pre>
                                                <pre class="line after"><span class="ws">            </span>data, code, headers = unpack(resp)</pre>
                                                <pre class="line after"><span class="ws">            </span>return self.make_response(data, code, headers=headers)</pre>
                                                <pre class="line after"><span class="ws"></span> </pre></div>
                                            </div>

                                              <li><div class="frame" id="frame-140682718399168">
                                                <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/views.py"</cite>,
                                                  line <em class="line">110</em>,
                                                  in <code class="function">view</code></h4>
                                                <div class="source library"><pre class="line before"><span class="ws"></span> </pre>
                                                  <pre class="line before"><span class="ws">            </span>def view(**kwargs: t.Any) -&gt; ft.ResponseReturnValue:</pre>
                                                  <pre class="line before"><span class="ws">                </span>self = view.view_class(  # type: ignore[attr-defined]</pre>
                                                  <pre class="line before"><span class="ws">                    </span>*class_args, **class_kwargs</pre>
                                                  <pre class="line before"><span class="ws">                </span>)</pre>
                                                  <pre class="line current"><span class="ws">                </span>return current_app.ensure_sync(self.dispatch_request)(**kwargs)  # type: ignore[no-any-return]</pre>
                                                  <pre class="line after"><span class="ws"></span> </pre>
                                                  <pre class="line after"><span class="ws">        </span>else:</pre>
                                                  <pre class="line after"><span class="ws">            </span>self = cls(*class_args, **class_kwargs)</pre>
                                                  <pre class="line after"><span class="ws"></span> </pre>
                                                  <pre class="line after"><span class="ws">            </span>def view(**kwargs: t.Any) -&gt; ft.ResponseReturnValue:</pre></div>
                                              </div>

                                                <li><div class="frame" id="frame-140682718401968">
                                                  <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/resource.py"</cite>,
                                                    line <em class="line">41</em>,
                                                    in <code class="function">dispatch_request</code></h4>
                                                  <div class="source library"><pre class="line before"><span class="ws">        </span>for decorator in self.method_decorators:</pre>
                                                    <pre class="line before"><span class="ws">            </span>meth = decorator(meth)</pre>
                                                    <pre class="line before"><span class="ws"></span> </pre>
                                                    <pre class="line before"><span class="ws">        </span>self.validate_payload(meth)</pre>
                                                    <pre class="line before"><span class="ws"></span> </pre>
                                                    <pre class="line current"><span class="ws">        </span>resp = meth(*args, **kwargs)</pre>
                                                    <pre class="line after"><span class="ws"></span> </pre>
                                                    <pre class="line after"><span class="ws">        </span>if isinstance(resp, BaseResponse):</pre>
                                                    <pre class="line after"><span class="ws">            </span>return resp</pre>
                                                    <pre class="line after"><span class="ws"></span> </pre>
                                                    <pre class="line after"><span class="ws">        </span>representations = self.representations or { }</pre></div>
                                                </div>

                                                  <li><div class="frame" id="frame-140682718404208">
                                                    <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/auth.py"</cite>,
                                                      line <em class="line">76</em>,
                                                      in <code class="function">post</code></h4>
                                                    <div class="source "><pre class="line before"><span class="ws">        </span>data=request.get_json()</pre>
                                                      <pre class="line before"><span class="ws"></span> </pre>
                                                      <pre class="line before"><span class="ws">        </span>email=data.get(&#39;email&#39;)</pre>
                                                      <pre class="line before"><span class="ws">        </span>password=data.get(&#39;password&#39;)</pre>
                                                      <pre class="line before"><span class="ws"></span> </pre>
                                                      <pre class="line current"><span class="ws">        </span>db_user=User.query.filter_by(email=email).first()</pre>
                                                      <pre class="line after"><span class="ws"></span> </pre>
                                                      <pre class="line after"><span class="ws">        </span>if db_user and check_password_hash(db_user.password, password):</pre>
                                                      <pre class="line after"><span class="ws">            </span>access_token=create_access_token(identity=db_user.email)</pre>
                                                      <pre class="line after"><span class="ws">            </span>refresh_token=create_refresh_token(identity=db_user.email)</pre>
                                                      <pre class="line after"><span class="ws"></span> </pre></div>
                                                  </div>

                                                    <li><div class="frame" id="frame-140682718405216">
                                                      <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/query.py"</cite>,
                                                        line <em class="line">2728</em>,
                                                        in <code class="function">first</code></h4>
                                                      <div class="source library"><pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                                                        <pre class="line before"><span class="ws">        </span># replicates limit(1) behavior</pre>
                                                        <pre class="line before"><span class="ws">        </span>if self._statement is not None:</pre>
                                                        <pre class="line before"><span class="ws">            </span>return self._iter().first()  # type: ignore</pre>
                                                        <pre class="line before"><span class="ws">        </span>else:</pre>
                                                        <pre class="line current"><span class="ws">            </span>return self.limit(1)._iter().first()  # type: ignore</pre>
                                                        <pre class="line after"><span class="ws"></span> </pre>
                                                        <pre class="line after"><span class="ws">    </span>def one_or_none(self) -&gt; Optional[_T]:</pre>
                                                        <pre class="line after"><span class="ws">        </span>&#34;&#34;&#34;Return at most one result or raise an exception.</pre>
                                                        <pre class="line after"><span class="ws"></span> </pre>
                                                        <pre class="line after"><span class="ws">        </span>Returns ``None`` if the query selects</pre></div>
                                                    </div>

                                                      <li><div class="frame" id="frame-140682718692736">
                                                        <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/query.py"</cite>,
                                                          line <em class="line">2827</em>,
                                                          in <code class="function">_iter</code></h4>
                                                        <div class="source library"><pre class="line before"><span class="ws">    </span>def _iter(self) -&gt; Union[ScalarResult[_T], Result[_T]]:</pre>
                                                          <pre class="line before"><span class="ws">        </span># new style execution.</pre>
                                                          <pre class="line before"><span class="ws">        </span>params = self._params</pre>
                                                          <pre class="line before"><span class="ws"></span> </pre>
                                                          <pre class="line before"><span class="ws">        </span>statement = self._statement_20()</pre>
                                                          <pre class="line current"><span class="ws">        </span>result: Union[ScalarResult[_T], Result[_T]] = self.session.execute(</pre>
                                                          <pre class="line after"><span class="ws">            </span>statement,</pre>
                                                          <pre class="line after"><span class="ws">            </span>params,</pre>
                                                          <pre class="line after"><span class="ws">            </span>execution_options={&#34;_sa_orm_load_options&#34;: self.load_options},</pre>
                                                          <pre class="line after"><span class="ws">        </span>)</pre>
                                                          <pre class="line after"><span class="ws"></span> </pre></div>
                                                      </div>

                                                        <li><div class="frame" id="frame-140682718692848">
                                                          <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/session.py"</cite>,
                                                            line <em class="line">2351</em>,
                                                            in <code class="function">execute</code></h4>
                                                          <div class="source library"><pre class="line before"><span class="ws"></span> </pre>
                                                            <pre class="line before"><span class="ws">        </span>:return: a :class:`_engine.Result` object.</pre>
                                                            <pre class="line before"><span class="ws"></span> </pre>
                                                            <pre class="line before"><span class="ws"></span> </pre>
                                                            <pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;</pre>
                                                            <pre class="line current"><span class="ws">        </span>return self._execute_internal(</pre>
                                                            <pre class="line after"><span class="ws">            </span>statement,</pre>
                                                            <pre class="line after"><span class="ws">            </span>params,</pre>
                                                            <pre class="line after"><span class="ws">            </span>execution_options=execution_options,</pre>
                                                            <pre class="line after"><span class="ws">            </span>bind_arguments=bind_arguments,</pre>
                                                            <pre class="line after"><span class="ws">            </span>_parent_execute_state=_parent_execute_state,</pre></div>
                                                        </div>

                                                          <li><div class="frame" id="frame-140682719080320">
                                                            <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/session.py"</cite>,
                                                              line <em class="line">2236</em>,
                                                              in <code class="function">_execute_internal</code></h4>
                                                            <div class="source library"><pre class="line before"><span class="ws">            </span>return conn.scalar(</pre>
                                                              <pre class="line before"><span class="ws">                </span>statement, params or { }, execution_options=execution_options</pre>
                                                              <pre class="line before"><span class="ws">            </span>)</pre>
                                                              <pre class="line before"><span class="ws"></span> </pre>
                                                              <pre class="line before"><span class="ws">        </span>if compile_state_cls:</pre>
                                                              <pre class="line current"><span class="ws">            </span>result: Result[Any] = compile_state_cls.orm_execute_statement(</pre>
                                                              <pre class="line after"><span class="ws">                </span>self,</pre>
                                                              <pre class="line after"><span class="ws">                </span>statement,</pre>
                                                              <pre class="line after"><span class="ws">                </span>params or { },</pre>
                                                              <pre class="line after"><span class="ws">                </span>execution_options,</pre>
                                                              <pre class="line after"><span class="ws">                </span>bind_arguments,</pre></div>
                                                          </div>

                                                            <li><div class="frame" id="frame-140682719080432">
                                                              <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/context.py"</cite>,
                                                                line <em class="line">293</em>,
                                                                in <code class="function">orm_execute_statement</code></h4>
                                                              <div class="source library"><pre class="line before"><span class="ws">        </span>params,</pre>
                                                                <pre class="line before"><span class="ws">        </span>execution_options,</pre>
                                                                <pre class="line before"><span class="ws">        </span>bind_arguments,</pre>
                                                                <pre class="line before"><span class="ws">        </span>conn,</pre>
                                                                <pre class="line before"><span class="ws">    </span>) -&gt; Result:</pre>
                                                                <pre class="line current"><span class="ws">        </span>result = conn.execute(</pre>
                                                                <pre class="line after"><span class="ws">            </span>statement, params or { }, execution_options=execution_options</pre>
                                                                <pre class="line after"><span class="ws">        </span>)</pre>
                                                                <pre class="line after"><span class="ws">        </span>return cls.orm_setup_cursor_result(</pre>
                                                                <pre class="line after"><span class="ws">            </span>session,</pre>
                                                                <pre class="line after"><span class="ws">            </span>statement,</pre></div>
                                                            </div>

                                                              <li><div class="frame" id="frame-140682717301216">
                                                                <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py"</cite>,
                                                                  line <em class="line">1418</em>,
                                                                  in <code class="function">execute</code></h4>
                                                                <div class="source library"><pre class="line before"><span class="ws">        </span>try:</pre>
                                                                  <pre class="line before"><span class="ws">            </span>meth = statement._execute_on_connection</pre>
                                                                  <pre class="line before"><span class="ws">        </span>except AttributeError as err:</pre>
                                                                  <pre class="line before"><span class="ws">            </span>raise exc.ObjectNotExecutableError(statement) from err</pre>
                                                                  <pre class="line before"><span class="ws">        </span>else:</pre>
                                                                  <pre class="line current"><span class="ws">            </span>return meth(</pre>
                                                                  <pre class="line after"><span class="ws">                </span>self,</pre>
                                                                  <pre class="line after"><span class="ws">                </span>distilled_parameters,</pre>
                                                                  <pre class="line after"><span class="ws">                </span>execution_options or NO_OPTIONS,</pre>
                                                                  <pre class="line after"><span class="ws">            </span>)</pre>
                                                                  <pre class="line after"><span class="ws"></span> </pre></div>
                                                              </div>

                                                                <li><div class="frame" id="frame-140682717542800">
                                                                  <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/sql/elements.py"</cite>,
                                                                    line <em class="line">515</em>,
                                                                    in <code class="function">_execute_on_connection</code></h4>
                                                                  <div class="source library"><pre class="line before"><span class="ws">        </span>execution_options: CoreExecuteOptionsParameter,</pre>
                                                                    <pre class="line before"><span class="ws">    </span>) -&gt; Result[Any]:</pre>
                                                                    <pre class="line before"><span class="ws">        </span>if self.supports_execution:</pre>
                                                                    <pre class="line before"><span class="ws">            </span>if TYPE_CHECKING:</pre>
                                                                    <pre class="line before"><span class="ws">                </span>assert isinstance(self, Executable)</pre>
                                                                    <pre class="line current"><span class="ws">            </span>return connection._execute_clauseelement(</pre>
                                                                    <pre class="line after"><span class="ws">                </span>self, distilled_params, execution_options</pre>
                                                                    <pre class="line after"><span class="ws">            </span>)</pre>
                                                                    <pre class="line after"><span class="ws">        </span>else:</pre>
                                                                    <pre class="line after"><span class="ws">            </span>raise exc.ObjectNotExecutableError(self)</pre>
                                                                    <pre class="line after"><span class="ws"></span> </pre></div>
                                                                </div>

                                                                  <li><div class="frame" id="frame-140682717966992">
                                                                    <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py"</cite>,
                                                                      line <em class="line">1640</em>,
                                                                      in <code class="function">_execute_clauseelement</code></h4>
                                                                    <div class="source library"><pre class="line before"><span class="ws">            </span>column_keys=keys,</pre>
                                                                      <pre class="line before"><span class="ws">            </span>for_executemany=for_executemany,</pre>
                                                                      <pre class="line before"><span class="ws">            </span>schema_translate_map=schema_translate_map,</pre>
                                                                      <pre class="line before"><span class="ws">            </span>linting=self.dialect.compiler_linting | compiler.WARN_LINTING,</pre>
                                                                      <pre class="line before"><span class="ws">        </span>)</pre>
                                                                      <pre class="line current"><span class="ws">        </span>ret = self._execute_context(</pre>
                                                                      <pre class="line after"><span class="ws">            </span>dialect,</pre>
                                                                      <pre class="line after"><span class="ws">            </span>dialect.execution_ctx_cls._init_compiled,</pre>
                                                                      <pre class="line after"><span class="ws">            </span>compiled_sql,</pre>
                                                                      <pre class="line after"><span class="ws">            </span>distilled_parameters,</pre>
                                                                      <pre class="line after"><span class="ws">            </span>execution_options,</pre></div>
                                                                  </div>

                                                                    <li><div class="frame" id="frame-140682717967104">
                                                                      <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py"</cite>,
                                                                        line <em class="line">1846</em>,
                                                                        in <code class="function">_execute_context</code></h4>
                                                                      <div class="source library"><pre class="line before"><span class="ws">        </span>context.pre_exec()</pre>
                                                                        <pre class="line before"><span class="ws"></span> </pre>
                                                                        <pre class="line before"><span class="ws">        </span>if context.execute_style is ExecuteStyle.INSERTMANYVALUES:</pre>
                                                                        <pre class="line before"><span class="ws">            </span>return self._exec_insertmany_context(dialect, context)</pre>
                                                                        <pre class="line before"><span class="ws">        </span>else:</pre>
                                                                        <pre class="line current"><span class="ws">            </span>return self._exec_single_context(</pre>
                                                                        <pre class="line after"><span class="ws">                </span>dialect, context, statement, parameters</pre>
                                                                        <pre class="line after"><span class="ws">            </span>)</pre>
                                                                        <pre class="line after"><span class="ws"></span> </pre>
                                                                        <pre class="line after"><span class="ws">    </span>def _exec_single_context(</pre>
                                                                        <pre class="line after"><span class="ws">        </span>self,</pre></div>
                                                                    </div>

                                                                      <li><div class="frame" id="frame-140682717967216">
                                                                        <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py"</cite>,
                                                                          line <em class="line">1986</em>,
                                                                          in <code class="function">_exec_single_context</code></h4>
                                                                        <div class="source library"><pre class="line before"><span class="ws">            </span>context.post_exec()</pre>
                                                                          <pre class="line before"><span class="ws"></span> </pre>
                                                                          <pre class="line before"><span class="ws">            </span>result = context._setup_result_proxy()</pre>
                                                                          <pre class="line before"><span class="ws"></span> </pre>
                                                                          <pre class="line before"><span class="ws">        </span>except BaseException as e:</pre>
                                                                          <pre class="line current"><span class="ws">            </span>self._handle_dbapi_exception(</pre>
                                                                          <pre class="line after"><span class="ws">                </span>e, str_statement, effective_parameters, cursor, context</pre>
                                                                          <pre class="line after"><span class="ws">            </span>)</pre>
                                                                          <pre class="line after"><span class="ws"></span> </pre>
                                                                          <pre class="line after"><span class="ws">        </span>return result</pre>
                                                                          <pre class="line after"><span class="ws"></span> </pre></div>
                                                                      </div>

                                                                        <li><div class="frame" id="frame-140682717967328">
                                                                          <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py"</cite>,
                                                                            line <em class="line">2353</em>,
                                                                            in <code class="function">_handle_dbapi_exception</code></h4>
                                                                          <div class="source library"><pre class="line before"><span class="ws"></span> </pre>
                                                                            <pre class="line before"><span class="ws">            </span>if newraise:</pre>
                                                                            <pre class="line before"><span class="ws">                </span>raise newraise.with_traceback(exc_info[2]) from e</pre>
                                                                            <pre class="line before"><span class="ws">            </span>elif should_wrap:</pre>
                                                                            <pre class="line before"><span class="ws">                </span>assert sqlalchemy_exception is not None</pre>
                                                                            <pre class="line current"><span class="ws">                </span>raise sqlalchemy_exception.with_traceback(exc_info[2]) from e</pre>
                                                                            <pre class="line after"><span class="ws">            </span>else:</pre>
                                                                            <pre class="line after"><span class="ws">                </span>assert exc_info[1] is not None</pre>
                                                                            <pre class="line after"><span class="ws">                </span>raise exc_info[1].with_traceback(exc_info[2])</pre>
                                                                            <pre class="line after"><span class="ws">        </span>finally:</pre>
                                                                            <pre class="line after"><span class="ws">            </span>del self._reentrant_error</pre></div>
                                                                        </div>

                                                                          <li><div class="frame" id="frame-140682717967440">
                                                                            <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py"</cite>,
                                                                              line <em class="line">1967</em>,
                                                                              in <code class="function">_exec_single_context</code></h4>
                                                                            <div class="source library"><pre class="line before"><span class="ws">                            </span>context,</pre>
                                                                              <pre class="line before"><span class="ws">                        </span>):</pre>
                                                                              <pre class="line before"><span class="ws">                            </span>evt_handled = True</pre>
                                                                              <pre class="line before"><span class="ws">                            </span>break</pre>
                                                                              <pre class="line before"><span class="ws">                </span>if not evt_handled:</pre>
                                                                              <pre class="line current"><span class="ws">                    </span>self.dialect.do_execute(</pre>
                                                                              <pre class="line after"><span class="ws">                        </span>cursor, str_statement, effective_parameters, context</pre>
                                                                              <pre class="line after"><span class="ws">                    </span>)</pre>
                                                                              <pre class="line after"><span class="ws"></span> </pre>
                                                                              <pre class="line after"><span class="ws">            </span>if self._has_events or self.engine._has_events:</pre>
                                                                              <pre class="line after"><span class="ws">                </span>self.dispatch.after_cursor_execute(</pre></div>
                                                                          </div>

                                                                            <li><div class="frame" id="frame-140682717967552">
                                                                              <h4>File <cite class="filename">"/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/default.py"</cite>,
                                                                                line <em class="line">924</em>,
                                                                                in <code class="function">do_execute</code></h4>
                                                                              <div class="source library"><pre class="line before"><span class="ws"></span> </pre>
                                                                                <pre class="line before"><span class="ws">    </span>def do_executemany(self, cursor, statement, parameters, context=None):</pre>
                                                                                <pre class="line before"><span class="ws">        </span>cursor.executemany(statement, parameters)</pre>
                                                                                <pre class="line before"><span class="ws"></span> </pre>
                                                                                <pre class="line before"><span class="ws">    </span>def do_execute(self, cursor, statement, parameters, context=None):</pre>
                                                                                <pre class="line current"><span class="ws">        </span>cursor.execute(statement, parameters)</pre>
                                                                                <pre class="line after"><span class="ws"></span> </pre>
                                                                                <pre class="line after"><span class="ws">    </span>def do_execute_no_params(self, cursor, statement, context=None):</pre>
                                                                                <pre class="line after"><span class="ws">        </span>cursor.execute(statement)</pre>
                                                                                <pre class="line after"><span class="ws"></span> </pre>
                                                                                <pre class="line after"><span class="ws">    </span>def is_disconnect(self, e, connection, cursor):</pre></div>
                                                                            </div>
                                                                            </ul>
                                                                            <blockquote>sqlalchemy.exc.OperationalError: (sqlite3.OperationalError) no such table: user
                                                                              [SQL: SELECT user.id AS user_id, user.first_name AS user_first_name, user.last_name AS user_last_name, user.email AS user_email, user.password AS user_password
                                                                              FROM user
                                                                              WHERE user.email = ?
                                                                              LIMIT ? OFFSET ?]
                                                                              [parameters: (&#39;test@example.com&#39;, 1, 0)]
                                                                              (Background on this error at: https://sqlalche.me/e/20/e3q8)
                                                                            </blockquote>
                                                                          </div>

                                                                          <div class="plain">
                                                                            <p>
                                                                              This is the Copy/Paste friendly version of the traceback.
                                                                            </p>
                                                                            <textarea cols="50" rows="10" name="code" readonly>Traceback (most recent call last):
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py&#34;, line 1967, in _exec_single_context
                                                                              self.dialect.do_execute(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/default.py&#34;, line 924, in do_execute
                                                                              cursor.execute(statement, parameters)
                                                                              sqlite3.OperationalError: no such table: user

                                                                              The above exception was the direct cause of the following exception:

                                                                              Traceback (most recent call last):
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py&#34;, line 1498, in __call__
                                                                              return self.wsgi_app(environ, start_response)
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py&#34;, line 1476, in wsgi_app
                                                                              response = self.handle_exception(e)
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py&#34;, line 671, in error_router
                                                                              return original_handler(f)
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_cors/extension.py&#34;, line 178, in wrapped_function
                                                                              return cors_after_request(app.make_response(f(*args, **kwargs)))
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py&#34;, line 669, in error_router
                                                                              return self.handle_error(e)
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py&#34;, line 1473, in wsgi_app
                                                                              response = self.full_dispatch_request()
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py&#34;, line 882, in full_dispatch_request
                                                                              rv = self.handle_user_exception(e)
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py&#34;, line 671, in error_router
                                                                              return original_handler(f)
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_cors/extension.py&#34;, line 178, in wrapped_function
                                                                              return cors_after_request(app.make_response(f(*args, **kwargs)))
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py&#34;, line 669, in error_router
                                                                              return self.handle_error(e)
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py&#34;, line 880, in full_dispatch_request
                                                                              rv = self.dispatch_request()
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py&#34;, line 865, in dispatch_request
                                                                              return self.ensure_sync(self.view_functions[rule.endpoint])(**view_args)  # type: ignore[no-any-return]
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py&#34;, line 402, in wrapper
                                                                              resp = resource(*args, **kwargs)
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/views.py&#34;, line 110, in view
                                                                              return current_app.ensure_sync(self.dispatch_request)(**kwargs)  # type: ignore[no-any-return]
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/resource.py&#34;, line 41, in dispatch_request
                                                                              resp = meth(*args, **kwargs)
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/auth.py&#34;, line 76, in post
                                                                              db_user=User.query.filter_by(email=email).first()
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/query.py&#34;, line 2728, in first
                                                                              return self.limit(1)._iter().first()  # type: ignore
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/query.py&#34;, line 2827, in _iter
                                                                              result: Union[ScalarResult[_T], Result[_T]] = self.session.execute(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/session.py&#34;, line 2351, in execute
                                                                              return self._execute_internal(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/session.py&#34;, line 2236, in _execute_internal
                                                                              result: Result[Any] = compile_state_cls.orm_execute_statement(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/context.py&#34;, line 293, in orm_execute_statement
                                                                              result = conn.execute(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py&#34;, line 1418, in execute
                                                                              return meth(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/sql/elements.py&#34;, line 515, in _execute_on_connection
                                                                              return connection._execute_clauseelement(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py&#34;, line 1640, in _execute_clauseelement
                                                                              ret = self._execute_context(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py&#34;, line 1846, in _execute_context
                                                                              return self._exec_single_context(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py&#34;, line 1986, in _exec_single_context
                                                                              self._handle_dbapi_exception(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py&#34;, line 2353, in _handle_dbapi_exception
                                                                              raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py&#34;, line 1967, in _exec_single_context
                                                                              self.dialect.do_execute(
                                                                              File &#34;/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/default.py&#34;, line 924, in do_execute
                                                                              cursor.execute(statement, parameters)
                                                                              sqlalchemy.exc.OperationalError: (sqlite3.OperationalError) no such table: user
                                                                              [SQL: SELECT user.id AS user_id, user.first_name AS user_first_name, user.last_name AS user_last_name, user.email AS user_email, user.password AS user_password
                                                                              FROM user
                                                                              WHERE user.email = ?
                                                                              LIMIT ? OFFSET ?]
                                                                              [parameters: (&#39;test@example.com&#39;, 1, 0)]
                                                                              (Background on this error at: https://sqlalche.me/e/20/e3q8)
                                                                            </textarea>
                                                                          </div>
                                                                          <div class="explanation">
                                                                            The debugger caught an exception in your WSGI application.  You can now
                                                                            look at the traceback which led to the error.  <span class="nojavascript">
                                                                              If you enable JavaScript you can also use additional features such as code
                                                                              execution (if the evalex feature is enabled), automatic pasting of the
                                                                              exceptions and much more.</span>
                                                                          </div>
                                                                          <div class="footer">
                                                                            Brought to you by <strong class="arthur">DON'T PANIC</strong>, your
                                                                            friendly Werkzeug powered traceback interpreter.
                                                                          </div>
                                                                        </div>

                                                                        <div class="pin-prompt">
                                                                          <div class="inner">
                                                                            <h3>Console Locked</h3>
                                                                            <p>
                                                                              The console is locked and needs to be unlocked by entering the PIN.
                                                                              You can find the PIN printed out on the standard output of your
                                                                              shell that runs the server.
                                                                              <form>
                                                                                <p>PIN:
                                                                                  <input type=text name=pin size=14>
                                                                                  <input type=submit name=btn value="Confirm Pin">
                                                                                  </form>
                                                                                </div>
                                                                              </div>
                                                                            </body>
                                                                          </html>

                                                                          <!--

                                                                          Traceback (most recent call last):
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
                                                                          self.dialect.do_execute(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/default.py", line 924, in do_execute
                                                                          cursor.execute(statement, parameters)
                                                                          sqlite3.OperationalError: no such table: user

                                                                          The above exception was the direct cause of the following exception:

                                                                          Traceback (most recent call last):
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py", line 1498, in __call__
                                                                          return self.wsgi_app(environ, start_response)
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py", line 1476, in wsgi_app
                                                                          response = self.handle_exception(e)
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py", line 671, in error_router
                                                                          return original_handler(f)
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_cors/extension.py", line 178, in wrapped_function
                                                                          return cors_after_request(app.make_response(f(*args, **kwargs)))
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py", line 669, in error_router
                                                                          return self.handle_error(e)
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py", line 1473, in wsgi_app
                                                                          response = self.full_dispatch_request()
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py", line 882, in full_dispatch_request
                                                                          rv = self.handle_user_exception(e)
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py", line 671, in error_router
                                                                          return original_handler(f)
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_cors/extension.py", line 178, in wrapped_function
                                                                          return cors_after_request(app.make_response(f(*args, **kwargs)))
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py", line 669, in error_router
                                                                          return self.handle_error(e)
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py", line 880, in full_dispatch_request
                                                                          rv = self.dispatch_request()
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/app.py", line 865, in dispatch_request
                                                                          return self.ensure_sync(self.view_functions[rule.endpoint])(**view_args)  # type: ignore[no-any-return]
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/api.py", line 402, in wrapper
                                                                          resp = resource(*args, **kwargs)
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask/views.py", line 110, in view
                                                                          return current_app.ensure_sync(self.dispatch_request)(**kwargs)  # type: ignore[no-any-return]
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/flask_restx/resource.py", line 41, in dispatch_request
                                                                          resp = meth(*args, **kwargs)
                                                                          File "/home/leon/Desktop/library/flask-backend/auth.py", line 76, in post
                                                                          db_user=User.query.filter_by(email=email).first()
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/query.py", line 2728, in first
                                                                          return self.limit(1)._iter().first()  # type: ignore
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/query.py", line 2827, in _iter
                                                                          result: Union[ScalarResult[_T], Result[_T]] = self.session.execute(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/session.py", line 2351, in execute
                                                                          return self._execute_internal(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/session.py", line 2236, in _execute_internal
                                                                          result: Result[Any] = compile_state_cls.orm_execute_statement(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/orm/context.py", line 293, in orm_execute_statement
                                                                          result = conn.execute(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py", line 1418, in execute
                                                                          return meth(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
                                                                          return connection._execute_clauseelement(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py", line 1640, in _execute_clauseelement
                                                                          ret = self._execute_context(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context
                                                                          return self._exec_single_context(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
                                                                          self._handle_dbapi_exception(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py", line 2353, in _handle_dbapi_exception
                                                                          raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
                                                                          self.dialect.do_execute(
                                                                          File "/home/leon/Desktop/library/flask-backend/venv/lib/python3.10/site-packages/sqlalchemy/engine/default.py", line 924, in do_execute
                                                                          cursor.execute(statement, parameters)
                                                                          sqlalchemy.exc.OperationalError: (sqlite3.OperationalError) no such table: user
                                                                          [SQL: SELECT user.id AS user_id, user.first_name AS user_first_name, user.last_name AS user_last_name, user.email AS user_email, user.password AS user_password
                                                                          FROM user
                                                                          WHERE user.email = ?
                                                                          LIMIT ? OFFSET ?]
                                                                          [parameters: ('test@example.com', 1, 0)]
                                                                          (Background on this error at: https://sqlalche.me/e/20/e3q8)
