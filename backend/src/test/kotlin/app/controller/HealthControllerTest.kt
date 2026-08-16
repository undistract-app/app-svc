package app.controller

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get

@WebMvcTest(HealthController::class)
class HealthControllerTest {

	@Autowired
	private lateinit var mockMvc: MockMvc

	@Test
	fun `health endpoint returns ok status`() {
		mockMvc.get("/api/health").andExpect {
			status { isOk() }
			jsonPath("$.status") { value("ok") }
		}
	}
}
